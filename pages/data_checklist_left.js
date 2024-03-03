
(fetch('/data').then(res => res.json()).then(
    data => {

        let date = new Date()
        let boiler1_el = document.querySelectorAll('.boiler1_datas');
        let boiler1_title_el = document.querySelector('.boiler1_title')
        let month_boiler1_el = document.querySelector('#month_boiler1');
        let yesterday_boiler1_el = document.querySelector('#yesterday_boiler1');
        let today_boiler1_el = document.querySelector('#today_boiler1');
        let values_boiler1_el = document.querySelector('#values_boiler1');
        let stock_boiler1_el = document.querySelector('#values_month_boiler1');
        let boiler1_data = data.boiler1[data.boiler1.length-1];
        let boiler1_check_el = boiler1_data.createdAt;
        

        let boiler2_el = document.querySelectorAll('.boiler2_datas');
        let boiler2_title_el = document.querySelector('.boiler2_title')
        let month_boiler2_el = document.querySelector('#month_boiler2');
        let yesterday_boiler2_el = document.querySelector('#yesterday_boiler2');
        let today_boiler2_el = document.querySelector('#today_boiler2');
        let values_boiler2_el = document.querySelector('#values_boiler2');
        let stock_boiler2_el = document.querySelector('#values_month_boiler2');
        let boiler2_data = data.boiler2[data.boiler2.length-1]
        let boiler2_check_el = boiler2_data.createdAt;
        
        if(boiler1_check_el.slice(0,10) == date.toISOString().slice(0,10)) {
            boiler1_el.forEach(e=>{
                e.style.display = 'none'
            })
            boiler1_title_el.innerHTML = '보일러1 : 점검을 완료하였습니다.'
        }else {
            month_boiler1_el.value = boiler1_data.last_month;
            yesterday_boiler1_el.value = boiler1_data.yesterday;
            today_boiler1_el.value = boiler1_data.today;
            values_boiler1_el.value = boiler1_data.value;
            stock_boiler1_el.value = boiler1_data.value_month;
        }
        if(boiler2_check_el.slice(0,10) == date.toISOString().slice(0,10)) {
            boiler2_el.forEach(e=>{
                e.style.display = 'none'
            })
            boiler2_title_el.innerHTML = '보일러2 : 점검을 완료하였습니다.'
        }else {
            month_boiler2_el.value = boiler2_data.last_month;
            yesterday_boiler2_el.value = boiler2_data.yesterday;
            today_boiler2_el.value = boiler2_data.today;
            values_boiler2_el.value = boiler2_data.value;
            stock_boiler2_el.value = boiler2_data.value_month;
        }
        

        
    }
).catch(error => console.error('에러발생',error)));
