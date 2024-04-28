import axios from 'axios';

const baseURL = 'http://localhost:3030';

export default class Client {
  async getTasks() {
    return axios.get(`${baseURL}/task`);
  }

  /**
   * @param {object} task
   * @param {string} task.id
   * @param {string} task.description
   * @param {string} task.day
   * @returns 
   */
  async createTask(task) {
    return axios.post(`${baseURL}/task`, task);
  }

  /**
   * @param {object} task
   * @param {string} task.id
   * @param {boolean} task.completed
   * @returns 
   */
  async updateTask({ id, completed }) {
    return axios.put(`${baseURL}/task/${id}`, { completed });
  }

  async deleteTaskWithId(id) {
    return axios.delete(`${baseURL}/task/${id}`);
  }
}