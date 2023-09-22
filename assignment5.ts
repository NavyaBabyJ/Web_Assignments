function mapKeys<T>(
    obj: { [key: string]: T },
    keyGenerator: (key: string) => string
  ): { [key: string]: T } {
    const result: { [key: string]: T } = {};
  
    for (const originalKey in obj) {
      if (obj.hasOwnProperty(originalKey)) {
        const newKey = keyGenerator(originalKey);
        result[newKey] = obj[originalKey];
      }
    }
  
    return result;
}

  const originalObject = {
    firstName: 'John',
    lastName: 'Doe',
  };
  
  const newObject = mapKeys(originalObject, (key) => `new_${key}`);
  console.log(newObject);
  
  
  