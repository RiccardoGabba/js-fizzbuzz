for(let i=1; i <= 100; i++){

    

    const numberWrap = document.getElementById('wrapper');
    let box = document.createElement('div');
    numberWrap.append(box);
    box.classList.add('box-piccolo', 'border', 'm-4', 'd-flex', 'align-items-center', 'justify-content-center', 'bg-primary', 'text-white')
    numberWrap.classList.add('d-flex', 'flex-wrap')
    box.innerHTML = i
    


    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
        const fizzbuzz = 'FizzBuzz'
        box.innerHTML = fizzbuzz;
        box.classList.add('bg-warning')
    
    } else if(i % 3 === 0){
        console.log('Fizz')
        const fizz = 'Fizz'
        box.innerHTML = fizz;
        box.classList.add('bg-success')
    
    } else if(i % 5 === 0){
        console.log('Buzz')
        const buzz = 'Buzz'
        box.innerHTML = buzz;
        box.classList.add('bg-danger')
  
    }else{
        console.log(i);
    }


}

