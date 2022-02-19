import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IQuestion } from 'app/shared/model/question.model';
import { getEntities as getQuestions } from 'app/entities/question/question.reducer';
import { IAnswer } from 'app/shared/model/answer.model';
import { getEntities as getAnswers } from 'app/entities/answer/answer.reducer';
import { ITestResult } from 'app/shared/model/test-result.model';
import { getEntities as getTestResults } from 'app/entities/test-result/test-result.reducer';
import { getEntity, updateEntity, createEntity, reset } from './answer-user.reducer';
import { IAnswerUser } from 'app/shared/model/answer-user.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const AnswerUserUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const questions = useAppSelector(state => state.question.entities);
  const answers = useAppSelector(state => state.answer.entities);
  const testResults = useAppSelector(state => state.testResult.entities);
  const answerUserEntity = useAppSelector(state => state.answerUser.entity);
  const loading = useAppSelector(state => state.answerUser.loading);
  const updating = useAppSelector(state => state.answerUser.updating);
  const updateSuccess = useAppSelector(state => state.answerUser.updateSuccess);
  const handleClose = () => {
    props.history.push('/answer-user' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getQuestions({}));
    dispatch(getAnswers({}));
    dispatch(getTestResults({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...answerUserEntity,
      ...values,
      question: questions.find(it => it.id.toString() === values.question.toString()),
      answer: answers.find(it => it.id.toString() === values.answer.toString()),
      testResult: testResults.find(it => it.id.toString() === values.testResult.toString()),
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
          ...answerUserEntity,
          question: answerUserEntity?.question?.id,
          answer: answerUserEntity?.answer?.id,
          testResult: answerUserEntity?.testResult?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.answerUser.home.createOrEditLabel" data-cy="AnswerUserCreateUpdateHeading">
            <Translate contentKey="truevocationApp.answerUser.home.createOrEditLabel">Create or edit a AnswerUser</Translate>
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
                  id="answer-user-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                id="answer-user-question"
                name="question"
                data-cy="question"
                label={translate('truevocationApp.answerUser.question')}
                type="select"
              >
                <option value="" key="0" />
                {questions
                  ? questions.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="answer-user-answer"
                name="answer"
                data-cy="answer"
                label={translate('truevocationApp.answerUser.answer')}
                type="select"
              >
                <option value="" key="0" />
                {answers
                  ? answers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="answer-user-testResult"
                name="testResult"
                data-cy="testResult"
                label={translate('truevocationApp.answerUser.testResult')}
                type="select"
              >
                <option value="" key="0" />
                {testResults
                  ? testResults.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/answer-user" replace color="info">
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

export default AnswerUserUpdate;
