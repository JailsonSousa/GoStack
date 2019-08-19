import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
      {repositories.map((repository) => (
          <Repository key={repository.id}>
              <header>
                  <img
                      src={repository.owner.avatar_url}
                      alt={repository.full_name}
                    />
                  <strong>{repository.name}</strong>
                  <small>{repository.login}</small>
                </header>
              <ul>
                  <li>
                      {repository.stargazers_count}
                      <small> stars</small>
                    </li>
                  <li>
                      {repository.forks_count}
                      <small> forks</small>
                    </li>
                  <li>
                      {repository.open_issues_count}
                      <small> issues</small>
                    </li>
                  <li>
                      {repository.lastCommit}
                      <small> last commit</small>
                    </li>
                </ul>
            </Repository>
        ))}
    </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      full_name: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
      }).isRequired,
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
