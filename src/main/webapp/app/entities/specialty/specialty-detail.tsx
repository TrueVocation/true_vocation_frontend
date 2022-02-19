import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './specialty.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const SpecialtyDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const specialtyEntity = useAppSelector(state => state.specialty.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="specialtyDetailsHeading">
          <Translate contentKey="truevocationApp.specialty.detail.title">Specialty</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="truevocationApp.specialty.name">Name</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.name}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="truevocationApp.specialty.description">Description</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.description}</dd>
          <dt>
            <span id="totalGrants">
              <Translate contentKey="truevocationApp.specialty.totalGrants">Total Grants</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.totalGrants}</dd>
          <dt>
            <span id="minScoreGeneral">
              <Translate contentKey="truevocationApp.specialty.minScoreGeneral">Min Score General</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.minScoreGeneral}</dd>
          <dt>
            <span id="minScoreQuota">
              <Translate contentKey="truevocationApp.specialty.minScoreQuota">Min Score Quota</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.minScoreQuota}</dd>
          <dt>
            <span id="picture">
              <Translate contentKey="truevocationApp.specialty.picture">Picture</Translate>
            </span>
          </dt>
          <dd>{specialtyEntity.picture}</dd>
          <dt>
            <Translate contentKey="truevocationApp.specialty.subject">Subject</Translate>
          </dt>
          <dd>
            {specialtyEntity.subjects
              ? specialtyEntity.subjects.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {specialtyEntity.subjects && i === specialtyEntity.subjects.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="truevocationApp.specialty.profession">Profession</Translate>
          </dt>
          <dd>
            {specialtyEntity.professions
              ? specialtyEntity.professions.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {specialtyEntity.professions && i === specialtyEntity.professions.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="truevocationApp.specialty.faculty">Faculty</Translate>
          </dt>
          <dd>{specialtyEntity.faculty ? specialtyEntity.faculty.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/specialty" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/specialty/${specialtyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default SpecialtyDetail;
