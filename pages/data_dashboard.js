
(fetch('/data').then(res => res.json()).then(
    data => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const koreanDate = `${year}-${month}-${day}`;
        let total_el = document.querySelector('.total_num');
        let left_el = document.querySelector('.left_num')
        total_el.innerHTML = Object.values(data).length;

        let boiler1_data = data.boiler1[data.boiler1.length-1];
        let boiler1_check_el = boiler1_data.createdAt;
        const boiler1_utcDate = new Date(boiler1_check_el);
        const boiler1_krDate = new Date(boiler1_utcDate.getTime());
        
        const boiler1_year = boiler1_krDate.getFullYear();
        const boiler1_month = String(boiler1_krDate.getMonth() + 1).padStart(2, '0');
        const boiler1_day = String(boiler1_krDate.getDate()).padStart(2, '0');
        const boiler1_krDates = `${boiler1_year}-${boiler1_month}-${boiler1_day}`;
        
        let boiler2_data = data.boiler2[data.boiler2.length-1]
        let boiler2_check_el = boiler2_data.createdAt;
        const boiler2_utcDate = new Date(boiler2_check_el);
        const boiler2_krDate = new Date(boiler2_utcDate.getTime());
       
        const boiler2_year = boiler2_krDate.getFullYear();
        const boiler2_month = String(boiler2_krDate.getMonth() + 1).padStart(2, '0');
        const boiler2_day = String(boiler2_krDate.getDate()).padStart(2, '0');
        const boiler2_krDates = `${boiler2_year}-${boiler2_month}-${boiler2_day}`;
       

        let left_sum = 0
        if(boiler1_krDates == koreanDate) {
            
            left_sum = left_sum
        }else {
            left_sum = left_sum+1
        }
        if(boiler2_krDates == koreanDate) {
            left_sum = left_sum
        }else {
            left_sum = left_sum+1
        }
        left_el.innerHTML = `${left_sum}`
    }
).catch(error => console.error('에러발생',error)));

