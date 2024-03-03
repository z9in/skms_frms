
(fetch('/data').then(res => res.json()).then(
    data => {
        let date = new Date()
        let total_el = document.querySelector('.total_num');
        let left_el = document.querySelector('.left_num')
        total_el.innerHTML = Object.values(data).length;

        let boiler1_data = data.boiler1[data.boiler1.length-1];
        let boiler1_check_el = boiler1_data.createdAt;

        let boiler2_data = data.boiler2[data.boiler2.length-1]
        let boiler2_check_el = boiler2_data.createdAt;

        let left_sum = 0
        if(boiler1_check_el.slice(0,10) == date.toISOString().slice(0,10)) {
            left_sum = left_sum
        }else {
            left_sum = left_sum+1
        }
        if(boiler2_check_el.slice(0,10) == date.toISOString().slice(0,10)) {
            left_sum = left_sum
        }else {
            left_sum = left_sum+1
        }
        left_el.innerHTML = `${left_sum}`
    }
).catch(error => console.error('에러발생',error)));

