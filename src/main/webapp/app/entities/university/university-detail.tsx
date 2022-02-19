import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './university.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const UniversityDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const universityEntity = useAppSelector(state => state.university.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="universityDetailsHeading">
          <Translate contentKey="truevocationApp.university.detail.title">University</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{universityEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="truevocationApp.university.name">Name</Translate>
            </span>
          </dt>
          <dd>{universityEntity.name}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="truevocationApp.university.address">Address</Translate>
            </span>
          </dt>
          <dd>{universityEntity.address}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="truevocationApp.university.description">Description</Translate>
            </span>
          </dt>
          <dd>{universityEntity.description}</dd>
          <dt>
            <span id="dormitory">
              <Translate contentKey="truevocationApp.university.dormitory">Dormitory</Translate>
            </span>
          </dt>
          <dd>{universityEntity.dormitory ? 'true' : 'false'}</dd>
          <dt>
            <span id="military">
              <Translate contentKey="truevocationApp.university.military">Military</Translate>
            </span>
          </dt>
          <dd>{universityEntity.military ? 'true' : 'false'}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="truevocationApp.university.status">Status</Translate>
            </span>
          </dt>
          <dd>{universityEntity.status}</dd>
          <dt>
            <span id="code">
              <Translate contentKey="truevocationApp.university.code">Code</Translate>
            </span>
          </dt>
          <dd>{universityEntity.code}</dd>
          <dt>
            <span id="logo">
              <Translate contentKey="truevocationApp.university.logo">Logo</Translate>
            </span>
          </dt>
          <dd>{universityEntity.logo}</dd>
          <dt>
            <Translate contentKey="truevocationApp.university.faculty">Faculty</Translate>
          </dt>
          <dd>
            {universityEntity.faculties
              ? universityEntity.faculties.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {universityEntity.faculties && i === universityEntity.faculties.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="truevocationApp.university.city">City</Translate>
          </dt>
          <dd>{universityEntity.city ? universityEntity.city.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/university" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/university/${universityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default UniversityDetail;
