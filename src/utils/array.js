function removeObjectFromArrayById(arr, id) {
  arr.splice(
    arr.findIndex((element) => element.id === id),
    1
  );
}

export { removeObjectFromArrayById };
