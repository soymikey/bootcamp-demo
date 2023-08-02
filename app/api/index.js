async function getData() {
  const res = await fetch(
    "https://www.fastmock.site/mock/cefc4c34c388f32ba19fef486d5bf337/api/program"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getData;
