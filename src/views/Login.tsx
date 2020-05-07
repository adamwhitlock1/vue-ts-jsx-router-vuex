import { Vue, Component } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  email = "test@test.com";
  password = "password1";
  login() {
    console.log(`Email: ${this.email} Password: ${this.password}`);
  }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <h2>{this.email}</h2>
      </div>
    );
  }
}
