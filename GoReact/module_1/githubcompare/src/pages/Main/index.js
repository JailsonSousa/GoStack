/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */

import React, { Component } from "react";
import moment from "moment";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import { Container, Form } from "./styles.js";
import logo from "../../assets/logo.png";

export default class Main extends Component {
    state = {
        repositoryInput: "",
        repositories: [],
        repositoryError: false,
        loading: false
    };

    handleAddRepository = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        try {
            const { data: repository } = await api.get(
                `/repos/${this.state.repositoryInput}`
            );

            repository.lastCommit = moment(repository.pushed_at).fromNow();
            this.setState({
                repositoryError: false,
                repositoryInput: "",
                repositories: [...this.state.repositories, repository]
            });
        } catch (err) {
            this.setState({ repositoryError: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="logo" />
                <Form
                    onSubmit={this.handleAddRepository}
                    withError={this.state.repositoryError}
                >
                    <input
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={e =>
                            this.setState({ repositoryInput: e.target.value })
                        }
                    />
                    <button type="submit">
                        {this.state.loading ? (
                            <i className="fa fa-spinner fa-pulse" />
                        ) : (
                            "+"
                        )}
                    </button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
