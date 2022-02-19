import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './portfolio.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const PortfolioDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const portfolioEntity = useAppSelector(state => state.portfolio.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="portfolioDetailsHeading">
          <Translate contentKey="truevocationApp.portfolio.detail.title">Portfolio</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{portfolioEntity.id}</dd>
          <dt>
            <span id="picture">
              <Translate contentKey="truevocationApp.portfolio.picture">Picture</Translate>
            </span>
          </dt>
          <dd>{portfolioEntity.picture}</dd>
          <dt>
            <span id="gender">
              <Translate contentKey="truevocationApp.portfolio.gender">Gender</Translate>
            </span>
          </dt>
          <dd>{portfolioEntity.gender}</dd>
          <dt>
            <span id="hobby">
              <Translate contentKey="truevocationApp.portfolio.hobby">Hobby</Translate>
            </span>
          </dt>
          <dd>{portfolioEntity.hobby}</dd>
          <dt>
            <span id="aboutMe">
              <Translate contentKey="truevocationApp.portfolio.aboutMe">About Me</Translate>
            </span>
          </dt>
          <dd>{portfolioEntity.aboutMe}</dd>
          <dt>
            <Translate contentKey="truevocationApp.portfolio.appUser">App User</Translate>
          </dt>
          <dd>{portfolioEntity.appUser ? portfolioEntity.appUser.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.portfolio.language">Language</Translate>
          </dt>
          <dd>
            {portfolioEntity.languages
              ? portfolioEntity.languages.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {portfolioEntity.languages && i === portfolioEntity.languages.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="truevocationApp.portfolio.school">School</Translate>
          </dt>
          <dd>
            {portfolioEntity.schools
              ? portfolioEntity.schools.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {portfolioEntity.schools && i === portfolioEntity.schools.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/portfolio" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/portfolio/${portfolioEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PortfolioDetail;
