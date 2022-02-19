import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IComments } from 'app/shared/model/comments.model';
import { getEntities as getComments } from 'app/entities/comments/comments.reducer';
import { IAppUser } from 'app/shared/model/app-user.model';
import { getEntities as getAppUsers } from 'app/entities/app-user/app-user.reducer';
import { getEntity, updateEntity, createEntity, reset } from './comment-answer.reducer';
import { ICommentAnswer } from 'app/shared/model/comment-answer.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CommentAnswerUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const comments = useAppSelector(state => state.comments.entities);
  const appUsers = useAppSelector(state => state.appUser.entities);
  const commentAnswerEntity = useAppSelector(state => state.commentAnswer.entity);
  const loading = useAppSelector(state => state.commentAnswer.loading);
  const updating = useAppSelector(state => state.commentAnswer.updating);
  const updateSuccess = useAppSelector(state => state.commentAnswer.updateSuccess);
  const handleClose = () => {
    props.history.push('/comment-answer' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getComments({}));
    dispatch(getAppUsers({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...commentAnswerEntity,
      ...values,
      comment: comments.find(it => it.id.toString() === values.comment.toString()),
      user: appUsers.find(it => it.id.toString() === values.user.toString()),
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
          ...commentAnswerEntity,
          comment: commentAnswerEntity?.comment?.id,
          user: commentAnswerEntity?.user?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.commentAnswer.home.createOrEditLabel" data-cy="CommentAnswerCreateUpdateHeading">
            <Translate contentKey="truevocationApp.commentAnswer.home.createOrEditLabel">Create or edit a CommentAnswer</Translate>
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
                  id="comment-answer-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.commentAnswer.text')}
                id="comment-answer-text"
                name="text"
                data-cy="text"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.commentAnswer.addedDate')}
                id="comment-answer-addedDate"
                name="addedDate"
                data-cy="addedDate"
                type="date"
              />
              <ValidatedField
                id="comment-answer-comment"
                name="comment"
                data-cy="comment"
                label={translate('truevocationApp.commentAnswer.comment')}
                type="select"
              >
                <option value="" key="0" />
                {comments
                  ? comments.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="comment-answer-user"
                name="user"
                data-cy="user"
                label={translate('truevocationApp.commentAnswer.user')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/comment-answer" replace color="info">
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

export default CommentAnswerUpdate;
