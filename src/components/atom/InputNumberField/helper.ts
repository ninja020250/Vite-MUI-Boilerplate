export const createNumericKeyDownHandler =
  (whiteList: string[]) =>
  (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const isValid = (event.key >= "0" && event.key <= "9") || whiteList.includes(event.key);

    if (!isValid) {
      event.preventDefault();
    }
  };
