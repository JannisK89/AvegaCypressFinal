const createTestData = () => {
    const testData = []
    for (let index = 0; index < 3; index++) {
        testData.push(crypto.randomUUID()) 
    }
    return testData
  }

  export default createTestData