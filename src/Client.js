import axios from 'axios';

export default class Client {
  async getTasks() {
    return axios.get('http://localhost:3030/tasks');
  }

  /**
   * 
   * @param {object} task
   * @param {string} task.id
   * @param {string} task.description
   * @param {string} task.day
   * @returns 
   */
  async createTask(task) {
    return axios.post('http://localhost:3030/tasks', task);
  }
}