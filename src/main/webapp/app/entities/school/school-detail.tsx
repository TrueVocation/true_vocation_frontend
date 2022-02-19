import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './school.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const SchoolDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const schoolEntity = useAppSelector(state => state.school.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="schoolDetailsHeading">
          <Translate contentKey="truevocationApp.school.detail.title">School</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{schoolEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="truevocationApp.school.name">Name</Translate>
            </span>
          </dt>
          <dd>{schoolEntity.name}</dd>
          <dt>
            <span id="number">
              <Translate contentKey="truevocationApp.school.number">Number</Translate>
            </span>
          </dt>
          <dd>{schoolEntity.number}</dd>
          <dt>
            <Translate contentKey="truevocationApp.school.city">City</Translate>
          </dt>
          <dd>{schoolEntity.city ? schoolEntity.city.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/school" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/school/${schoolEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default SchoolDetail;
