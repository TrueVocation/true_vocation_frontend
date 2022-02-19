import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './prof-test.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const ProfTestDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const profTestEntity = useAppSelector(state => state.profTest.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="profTestDetailsHeading">
          <Translate contentKey="truevocationApp.profTest.detail.title">ProfTest</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{profTestEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="truevocationApp.profTest.name">Name</Translate>
            </span>
          </dt>
          <dd>{profTestEntity.name}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="truevocationApp.profTest.description">Description</Translate>
            </span>
          </dt>
          <dd>{profTestEntity.description}</dd>
          <dt>
            <span id="instruction">
              <Translate contentKey="truevocationApp.profTest.instruction">Instruction</Translate>
            </span>
          </dt>
          <dd>{profTestEntity.instruction}</dd>
        </dl>
        <Button tag={Link} to="/prof-test" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/prof-test/${profTestEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProfTestDetail;
