function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
      2000;
    });
  });
}

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data");
            resolve();
        }, 8000);

    })
}

function calculatedata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calculate");
            resolve();
        },3000)
    })
}
function sendsms(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("sms");
            resolve();
        },1000)
    })
}
function logout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("logout");
            resolve();
        },1000)
    })
}
login().then(getData).then(calculatedata).then(sendsms).then(logout);
    