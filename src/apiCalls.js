const getPromise = (endpoint) => {
  const formattedEndpoint = endpoint ? endpoint : "/api";
  return fetch(`https://www.dnd5eapi.co${formattedEndpoint}`).then(
    (res) => {
      if (res.ok) {
        return res.json();
      }
    }
  );
};

export { getPromise };

// const getPromise = () =>
//   fetch("http://localhost:3001/api/v1/reservations").then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//   });

// const deletePromise = (id) =>
//   fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
//     method: "DELETE",
//   }).then((res) => {
//     console.log(res);
//     if (res.ok) {
//       return res.json();
//     }
//   });

// const postPromise = (data) =>
//   fetch(`http://localhost:3001/api/v1/reservations`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => {
//     console.log(res);
//     if (res.ok) {
//       return res.json();
//     }
//   });

// export { getPromise, deletePromise, postPromise };
