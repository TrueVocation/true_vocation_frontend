import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITestResult } from 'app/shared/model/test-result.model';
import { getEntities as getTestResults } from 'app/entities/test-result/test-result.reducer';
import { IProfession } from 'app/shared/model/profession.model';
import { getEntities as getProfessions } from 'app/entities/profession/profession.reducer';
import { getEntity, updateEntity, createEntity, reset } from './recommendation.reducer';
import { IRecommendation } from 'app/shared/model/recommendation.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const RecommendationUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const testResults = useAppSelector(state => state.testResult.entities);
  const professions = useAppSelector(state => state.profession.entities);
  const recommendationEntity = useAppSelector(state => state.recommendation.entity);
  const loading = useAppSelector(state => state.recommendation.loading);
  const updating = useAppSelector(state => state.recommendation.updating);
  const updateSuccess = useAppSelector(state => state.recommendation.updateSuccess);
  const handleClose = () => {
    props.history.push('/recommendation' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getTestResults({}));
    dispatch(getProfessions({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...recommendationEntity,
      ...values,
      profession: professions.find(it => it.id.toString() === values.profession.toString()),
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
          ...recommendationEntity,
          profession: recommendationEntity?.profession?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.recommendation.home.createOrEditLabel" data-cy="RecommendationCreateUpdateHeading">
            <Translate contentKey="truevocationApp.recommendation.home.createOrEditLabel">Create or edit a Recommendation</Translate>
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
                  id="recommendation-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                id="recommendation-profession"
                name="profession"
                data-cy="profession"
                label={translate('truevocationApp.recommendation.profession')}
                type="select"
              >
                <option value="" key="0" />
                {professions
                  ? professions.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/recommendation" replace color="info">
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

export default RecommendationUpdate;
