"use server";

type FormState = {
  message?: string;
  issues?: string[];
};

export async function onSearch(prevState: FormState, data: FormData) {
  const searchInput = data.get("searchInput") as string;
  const selectedOption = data.get("selectedOption") as string;

  console.log(data);

  // Simulate search logic (you can replace this with actual search logic)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate successful search or validation failure
  if (searchInput && selectedOption) {
    return {
      message: `Searching for "${searchInput}" in "${selectedOption}" completed successfully.`,
    };
  } else {
    return {
      issues: ["Please provide a valid search input and select an option."],
    };
  }
}
