import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './test-result.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TestResultDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const testResultEntity = useAppSelector(state => state.testResult.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="testResultDetailsHeading">
          <Translate contentKey="truevocationApp.testResult.detail.title">TestResult</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{testResultEntity.id}</dd>
          <dt>
            <Translate contentKey="truevocationApp.testResult.appUser">App User</Translate>
          </dt>
          <dd>{testResultEntity.appUser ? testResultEntity.appUser.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.testResult.recommendation">Recommendation</Translate>
          </dt>
          <dd>{testResultEntity.recommendation ? testResultEntity.recommendation.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.testResult.profTest">Prof Test</Translate>
          </dt>
          <dd>{testResultEntity.profTest ? testResultEntity.profTest.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/test-result" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/test-result/${testResultEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TestResultDetail;
