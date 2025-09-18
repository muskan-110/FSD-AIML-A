async function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 2000);
  });
}

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data");
      resolve();
    }, 8000);
  });
}

async function calculatedata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calculate");
      resolve();
    }, 3000);
  });
}

async function sendsms() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sms");
      resolve();
    }, 1000);
  });
}

async function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("logout");
      resolve();
    }, 1000);
  });
}

async function main() {
  await login();
  await getData();
  await calculatedata();
  await sendsms();
  await logout();
}

main();
