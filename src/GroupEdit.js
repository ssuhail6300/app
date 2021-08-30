import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class GroupEdit extends Component {

  emptyItem = {
    name: '',
    address: '',
    city: '',
    stateOrProvince: '',
    country: '',
    postalCode: '',
    contact:'',
    email:'',
    date:'',
    panel:'',
    remarks:''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const group = await (await fetch(`/api/group/${this.props.match.params.id}`)).json();
      this.setState({item: group});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/group' + (item.id ? '/' + item.id : ''), {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/groups');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Profile' : 'Add Profile'}</h2>;

    let interviewTime=item.date;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={item.name || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" value={item.email || ''}
                   onChange={this.handleChange} autoComplete="email"/>
          </FormGroup>
          <FormGroup>
            <Label for="contact">Contact</Label>
            <Input type="text" name="contact" id="contact" value={item.contact || ''}
                   onChange={this.handleChange} autoComplete="contact"/>
          </FormGroup>
          <div className="row">
          <FormGroup className="col-md-5 mb-3">
              <Label for="panel">Panel</Label>
              <Input type="text" name="panel" id="panel" value={item.panel || ''}
                     onChange={this.handleChange} autoComplete="panel"/>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
            <Label for="date">Date</Label>
            <Input type="text" placeholder="ex: 2021-07-30T18:00:00Z" name="date" id="date" value={interviewTime || ''}
                   onChange={this.handleChange} autoComplete="date"/>
          </FormGroup>
          </div>
          <FormGroup>
            <Label for="remarks">Remarks</Label>
            <textarea className="remarks" type="text" name="remarks" id="remarks" value={item.remarks || ''}
                   onChange={this.handleChange} autoComplete="remarks"></textarea>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(GroupEdit);