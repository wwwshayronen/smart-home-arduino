const fetchHook = (action) => {
  console.log("propsss", action);
  async function fetchData() {
    const response = await fetch("/api/switch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: action,
      }),
    });
    // console.log("res:", response.json());
    return response.json();
  }

  fetchData();
};

export default fetchHook;
