import amgApi from './axios';


class Service {

  async validateAccess(body : any) {
    const result = await amgApi.post("/survey/validate-access", body);
    return result;
  }
    async getQuestions() {
      const result = await amgApi.get("/survey/get-questions");
      return result;
    }

}

export default new Service();