
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let val = document.getElementById('val')
    btn1.addEventListener('click', (e) => {
      this.val.value++
    })
    btn2.addEventListener('click', (e) => {
      this.val.value--
    })
  