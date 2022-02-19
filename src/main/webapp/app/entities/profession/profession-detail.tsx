import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './profession.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const ProfessionDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const professionEntity = useAppSelector(state => state.profession.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="professionDetailsHeading">
          <Translate contentKey="truevocationApp.profession.detail.title">Profession</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{professionEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="truevocationApp.profession.name">Name</Translate>
            </span>
          </dt>
          <dd>{professionEntity.name}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="truevocationApp.profession.description">Description</Translate>
            </span>
          </dt>
          <dd>{professionEntity.description}</dd>
          <dt>
            <span id="employability">
              <Translate contentKey="truevocationApp.profession.employability">Employability</Translate>
            </span>
          </dt>
          <dd>{professionEntity.employability}</dd>
          <dt>
            <span id="averageSalary">
              <Translate contentKey="truevocationApp.profession.averageSalary">Average Salary</Translate>
            </span>
          </dt>
          <dd>{professionEntity.averageSalary}</dd>
          <dt>
            <span id="picture">
              <Translate contentKey="truevocationApp.profession.picture">Picture</Translate>
            </span>
          </dt>
          <dd>{professionEntity.picture}</dd>
          <dt>
            <Translate contentKey="truevocationApp.profession.course">Course</Translate>
          </dt>
          <dd>
            {professionEntity.courses
              ? professionEntity.courses.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {professionEntity.courses && i === professionEntity.courses.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/profession" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/profession/${professionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProfessionDetail;
