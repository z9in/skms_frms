
(fetch('/data').then(res => res.json()).then(
    data => {
        console.log(data)
        let month_boiler1_el = document.querySelector('#month_boiler1');
        let yesterday_boiler1_el = document.querySelector('#yesterday_boiler1');
        let today_boiler1_el = document.querySelector('#today_boiler1');
        let values_boiler1_el = document.querySelector('#values_boiler1');
        let stock_boiler1_el = document.querySelector('#values_month_boiler1');
        let boiler1_data = data.boiler1[data.boiler1.length-1];
        
        let month_boiler2_el = document.querySelector('#month_boiler2');
        let yesterday_boiler2_el = document.querySelector('#yesterday_boiler2');
        let today_boiler2_el = document.querySelector('#today_boiler2');
        let values_boiler2_el = document.querySelector('#values_boiler2');
        let stock_boiler2_el = document.querySelector('#values_month_boiler2');
        let boiler2_data = data.boiler2[data.boiler2.length-1]
        
        month_boiler1_el.value = boiler1_data.last_month;
        yesterday_boiler1_el.value = boiler1_data.today;
        today_boiler1_el.addEventListener('input', function(event) {
            const changedValue = event.target.value; // 변경된 값 가져오기
            console.log('변경된 값:', changedValue);
            values_boiler1_el.value = event.target.value - boiler1_data.today;
            stock_boiler1_el.value = event.target.value - boiler1_data.last_month;
        })        
        
        month_boiler2_el.value = boiler2_data.last_month;
        yesterday_boiler2_el.value = boiler2_data.today;
        today_boiler2_el.addEventListener('input', function(event) {
            const changedValue = event.target.value; // 변경된 값 가져오기
            console.log('변경된 값:', changedValue);
            values_boiler2_el.value = event.target.value - boiler2_data.today;
            stock_boiler2_el.value = event.target.value - boiler2_data.last_month;
        })
        }
        
).catch(error => console.error('에러발생',error)));
