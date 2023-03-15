function getData() {
  const state = Math.floor(Math.random() * 3);
  if (state === 0) {
    return {
      data: { id: 1, name: "Kyle" },
      isLoading: false,
      isError: false,
      errors: undefined,
    };
  }

  if (state === 1) {
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      errors: ["wow oh no"],
    };
  }

  return {
    data: undefined,
    isLoading: true,
    isError: false,
    errors: undefined,
  };
}

function processData() {
  const result = getData();
  // this would throw an error at run time when data isn't present:
  console.log(`id:  ${result.data.id}, name: ${result.data.name}`);

  // this would throw an error:
  const {
    data: { id, name },
  } = getData();
  console.log(`id: ${id}, name: ${name}`);

  if (result.data) {
    // ... etc
  }
}
