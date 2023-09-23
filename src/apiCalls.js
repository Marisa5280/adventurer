const getPromise = (endpoint) => {
  const formattedEndpoint = endpoint ? endpoint : "/api";
  return fetch(`https://www.dnd5eapi.co${formattedEndpoint}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        `There was an error: ${res.status} ${res.statusText}`
      );
    }
  });
};

export { getPromise };
