//GETS THE USER OF THE CURRENT SESSION
async function getUser(callback) {
  const response = await fetch("/user");
  const res = await response.json();

  if (response.status === 201) {
    callback(res);
  }
}

//LOGIN
async function handleLogin(username, password, callback) {
  // console.log(username);
  // console.log(password);

  const loginResult = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const res = await loginResult.json();
  // console.log(res);

  if (loginResult.status === 201) {
    callback(res);
  }
}

//SIGN UP
async function handleSignUp(username, password, callback) {
  // console.log(username);
  // console.log(password);

  const signUpResult = await fetch("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const res = await signUpResult.json();
  // console.log(res);

  if (signUpResult.status === 201) {
    callback(res);
  }
}

async function logout(callback) {
  const response = await fetch("/auth/logout", {
    method: "POST",
  });
  const result = await response.json();
  console.log(result);
  if (response.status === 200) {
    callback(result);
  }
}

const getAllJourneys = async (setJourneys) => {
  var res = [];
  const response = await fetch("/journey");
  const json = await response.json();
  Object.keys(json).map((data) => res.push(json[data]));
  setJourneys(res);
};

const getJourney = async (setJourney, id) => {
  console.log("called");
  const response = await fetch("/journey/" + id);
  const json = await response.json();
  console.log(json);
  setJourney(json);
};

const getSavedJourneys = async (setJourneys) => {
  var res = [];
  const response = await fetch("/user/savedJourneys");
  const json = await response.json();
  if (json.status === 500) {
    return;
  }
  Object.keys(json).map((data) => res.push(json[data]));
  setJourneys(res);
  return res;
};

module.exports = {
  getUser,
  handleSignUp,
  handleLogin,
  getAllJourneys,
  getSavedJourneys,
  logout,
};
