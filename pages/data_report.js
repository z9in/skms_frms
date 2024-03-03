
(fetch('/data').then(res => res.json()).then(
    data => {
        console.log(data)
        let month_boiler1_el = document.querySelector('#month_boiler1');
        let yesterday_boiler1_el = document.querySelector('#yesterday_boiler1');
        let today_boiler1_el = document.querySelector('#today_boiler1');
        let values_boiler1_el = document.querySelector('#values_boiler1');
        let stock_boiler1_el = document.querySelector('#values_month_boiler1');
        let boiler1_data = data.boiler1[data.boiler1.length-1]

        let month_boiler2_el = document.querySelector('#month_boiler2');
        let yesterday_boiler2_el = document.querySelector('#yesterday_boiler2');
        let today_boiler2_el = document.querySelector('#today_boiler2');
        let values_boiler2_el = document.querySelector('#values_boiler2');
        let stock_boiler2_el = document.querySelector('#values_month_boiler2');
        let boiler2_data = data.boiler2[data.boiler2.length-1]

        console.log(month_boiler1_el, boiler1_data)

        month_boiler1_el.value = boiler1_data.last_month;
        yesterday_boiler1_el.value = boiler1_data.yesterday;
        today_boiler1_el.value = boiler1_data.today;
        values_boiler1_el.value = boiler1_data.value;
        stock_boiler1_el.value = boiler1_data.value_month;

        month_boiler2_el.value = boiler2_data.last_month;
        yesterday_boiler2_el.value = boiler2_data.yesterday;
        today_boiler2_el.value = boiler2_data.today;
        values_boiler2_el.value = boiler2_data.value;
        stock_boiler2_el.value = boiler2_data.value_month;
    }
).catch(error => console.error('에러발생',error)));
