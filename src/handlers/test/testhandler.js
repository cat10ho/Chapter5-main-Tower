const testHandler = async ({ socket, sequence, payload }) => {
    try {  
        console.log("sequence:",sequence,"\npayload:",payload)
    } catch (error) {
      console.error(error)
    }
  };
  
  
  export default testHandler;