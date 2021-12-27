function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  var str = "Arshan".toLocaleLowerCase();
  console.log(removeDuplicateCharacters(str));