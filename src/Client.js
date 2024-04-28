import axios from 'axios';

const baseURL = 'http://localhost:3030';

export default class Client {
  async getTasks() {
    return axios.get(`${baseURL}/tasks`);
  }

  /**
   * @param {object} task
   * @param {string} task.id
   * @param {string} task.description
   * @param {string} task.day
   * @returns 
   */
  async createTask(task) {
    return axios.post(`${baseURL}/tasks`, task);
  }
}