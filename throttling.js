function fakeFetch() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      rs({
        name: "jack",
        job: "teacher"
      });
    }, 1000);
  });
}

fakeFetch()
  .then(data => {
    return data.job;
    // throw new Error("bad")
  })
  .then(
    data => {
      // console.log(data);
      throw new Error("bad");
    },
    error => {
      console.log("... e..");
    }
  )
  .catch(error => {
    console.log(".. catch error " + error);
  });

const throttle = function(workFunc, timeLimit) {
  let lastCallTime = null;
  return function() {
    if (lastCallTime === null || Date.now() - lastCallTime > timeLimit) {
      workFunc.apply(this, arguments);
      lastCallTime = Date.now();
    } else {
      console.log("you are calling too soon");
    }
  };
};

function tellTime() {
  console.log(new Date().toLocaleString());
}

const t = throttle(tellTime, 100);
t();
t();

setTimeout(() => {
  t();
}, 100);
