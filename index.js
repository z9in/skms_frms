const express = require('express');
let {User, sequelize} = require('./database/userList.js');
let {sequelize1, Boiler, Boiler2} = require('./database/boiler.js');
let cookieParser = require('cookie-parser');
let session = require('express-session')
const {where} = require('sequelize')
const bodyParser = require('body-parser');
// const { FORCE } = require('sequelize/types/index-hints.js');
const app = express();
const port = 3000;

app.use('/pages',express.static('pages'));
app.use(express.static('pages'));
// app.use(cookieParser)
app.use(session({
  secret: '비밀 키',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sequelize.sync().then(async () => {
  console.log('유저데이터연결완료');

  // 사용자 데이터 찾기 또는 생성
  const [user, created] = await User.findOrCreate({
    where: { userIds: 'admin' },
    defaults: {
      userPwds: '1234',
      userName: 'Admin',
      userRole: 'Admin'
    }
  });

  if (created) {
    // console.log('새로운 사용자 생성: ', user);
  } else {
    // console.log('기존 사용자 찾음: ', user);
  }
}).catch((error) => {
  console.error('데이터베이스 연결 또는 동기화 에러: ', error);
});

sequelize1.sync().then(async () => {
  console.log('유저데이터연결완료');

  // Boiler 데이터 찾기 또는 생성
  const [boiler, createdBoiler] = await Boiler.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month: 0,
      yesterday: 0,
      today: 0,
      value: 0,
      value_month: 0,
      state: ""
    }
  });
  
  const [boiler2, createdBoiler2] = await Boiler2.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month: 0,
      yesterday: 0,
      today: 0,
      value: 0,
      value_month: 0,
      state: ""
    }
  });
});

// 로그인API
app.post('/members', async function(req, res) {
 
  const postData = req.body; // 요청의 body에서 데이터 추출
  let userId = postData.userId;  
  let checkId = await User.findAll( {where : {userIds : userId}})
  let reviewId = Boolean(checkId[0])
  if(reviewId==false){
    res.send(`<script>alert('존재하지 않는 아이디입니다.'); window.location.replace('/');</script>`)
  }else {
    // console.log(checkId.userPwds, postData.password)
    if(checkId[0].userPwds == postData.password){
      // console.log(checkId[0].userName)
      req.session.userId = userId
      res.cookie('name',checkId[0].userName)
      res.send(`<script> alert('로그인되었습니다.'); window.location.replace('/dashboard'); </script>`);
    }else {
      res.send(`<script>alert('비밀번호가 맞지 않습니다.'); window.location.replace('/');</script>`)
    }
  }
});

app.get('/dashboard', (req,res)=> {
  if(req.session.userId) {
    res.sendFile(__dirname+'/pages/dashboard.html')
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
  
})

app.get('/checklist', (req,res)=>{
  if(req.session.userId) {
    res.sendFile(__dirname+'/pages/checklist.html')
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
  // res.render('/pages/checklist.html')
})
app.get('/data', async (req, res) => {
  let boiler1_data = await Boiler.findAll();
  let boiler2_data = await Boiler2.findAll();
  let data = {
    'boiler1' : [...boiler1_data],
    'boiler2' : [...boiler2_data]
  }
  res.json(data);
});

app.get('/fault', async (req, res) =>{
  let boiler1_data = await Boiler.findAll( { where : {state: '불량'}});
  let boiler2_data = await Boiler.findAll( { where : {state: '불량'}});
  let data = {
    'boiler1' : [...boiler1_data],
    'boiler2' : [...boiler2_data]
  }
  res.json(data)
})

//boiler1 업데이트
app.post('/boiler1', async (req,res)=>{
  let values = req.body.today;
  let datas = await Boiler.findOne({
    order: [['updatedAt', 'DESC']]
  })
  let data = JSON.parse(JSON.stringify(datas));
  console.log("로그", values, data)
  let last_month = data.last_month;
  let yesterday = data.yesterday;
  let user = await Boiler.create({
    last_month: last_month,
    yesterday: yesterday,
    today: values,
    value: values - yesterday,
    value_month: values - last_month,
    state: '양호'
  })
  res.redirect('/checklist');
})

//boiler2 업데이트
app.post('/boiler2', async (req,res)=>{
  let values = req.body.today;
  let datas = await Boiler2.findOne({
    order: [['updatedAt', 'DESC']]
  })
  let data = JSON.parse(JSON.stringify(datas));
  console.log("로그", values, data)
  let last_month = data.last_month;
  let yesterday = data.yesterday;
  let user = await Boiler2.create({
    last_month: last_month,
    yesterday: yesterday + values,
    today: values,
    value: values - yesterday,
    value_month: values - last_month,
    state: '양호'
  })
  res.redirect('/checklist');
})

app.get('/report', (req,res)=>{
  if(req.session.userId) {
    res.sendFile(__dirname+"/pages/report.html")
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
})
app.get('/checklist_left',(req,res)=>{
  if(req.session.userId) {
    res.sendFile(__dirname+'/pages/checklist_left.html')
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
});
app.get('/checklist_faults',(req,res)=>{
  if(req.session.userId) {
    res.sendFile(__dirname+'/pages/checklist_faults.html')
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
});
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/pages/index.html')
});


// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});