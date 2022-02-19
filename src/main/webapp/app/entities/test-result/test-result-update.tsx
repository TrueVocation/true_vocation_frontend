import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IAppUser } from 'app/shared/model/app-user.model';
import { getEntities as getAppUsers } from 'app/entities/app-user/app-user.reducer';
import { IRecommendation } from 'app/shared/model/recommendation.model';
import { getEntities as getRecommendations } from 'app/entities/recommendation/recommendation.reducer';
import { IProfTest } from 'app/shared/model/prof-test.model';
import { getEntities as getProfTests } from 'app/entities/prof-test/prof-test.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-result.reducer';
import { ITestResult } from 'app/shared/model/test-result.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TestResultUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const appUsers = useAppSelector(state => state.appUser.entities);
  const recommendations = useAppSelector(state => state.recommendation.entities);
  const profTests = useAppSelector(state => state.profTest.entities);
  const testResultEntity = useAppSelector(state => state.testResult.entity);
  const loading = useAppSelector(state => state.testResult.loading);
  const updating = useAppSelector(state => state.testResult.updating);
  const updateSuccess = useAppSelector(state => state.testResult.updateSuccess);
  const handleClose = () => {
    props.history.push('/test-result' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getAppUsers({}));
    dispatch(getRecommendations({}));
    dispatch(getProfTests({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...testResultEntity,
      ...values,
      appUser: appUsers.find(it => it.id.toString() === values.appUser.toString()),
      recommendation: recommendations.find(it => it.id.toString() === values.recommendation.toString()),
      profTest: profTests.find(it => it.id.toString() === values.profTest.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...testResultEntity,
          appUser: testResultEntity?.appUser?.id,
          recommendation: testResultEntity?.recommendation?.id,
          profTest: testResultEntity?.profTest?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.testResult.home.createOrEditLabel" data-cy="TestResultCreateUpdateHeading">
            <Translate contentKey="truevocationApp.testResult.home.createOrEditLabel">Create or edit a TestResult</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="test-result-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                id="test-result-appUser"
                name="appUser"
                data-cy="appUser"
                label={translate('truevocationApp.testResult.appUser')}
                type="select"
              >
                <option value="" key="0" />
                {appUsers
                  ? appUsers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="test-result-recommendation"
                name="recommendation"
                data-cy="recommendation"
                label={translate('truevocationApp.testResult.recommendation')}
                type="select"
              >
                <option value="" key="0" />
                {recommendations
                  ? recommendations.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="test-result-profTest"
                name="profTest"
                data-cy="profTest"
                label={translate('truevocationApp.testResult.profTest')}
                type="select"
              >
                <option value="" key="0" />
                {profTests
                  ? profTests.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/test-result" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default TestResultUpdate;
