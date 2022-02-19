import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './comment-answer.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CommentAnswerDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const commentAnswerEntity = useAppSelector(state => state.commentAnswer.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="commentAnswerDetailsHeading">
          <Translate contentKey="truevocationApp.commentAnswer.detail.title">CommentAnswer</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{commentAnswerEntity.id}</dd>
          <dt>
            <span id="text">
              <Translate contentKey="truevocationApp.commentAnswer.text">Text</Translate>
            </span>
          </dt>
          <dd>{commentAnswerEntity.text}</dd>
          <dt>
            <span id="addedDate">
              <Translate contentKey="truevocationApp.commentAnswer.addedDate">Added Date</Translate>
            </span>
          </dt>
          <dd>
            {commentAnswerEntity.addedDate ? (
              <TextFormat value={commentAnswerEntity.addedDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="truevocationApp.commentAnswer.comment">Comment</Translate>
          </dt>
          <dd>{commentAnswerEntity.comment ? commentAnswerEntity.comment.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.commentAnswer.user">User</Translate>
          </dt>
          <dd>{commentAnswerEntity.user ? commentAnswerEntity.user.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/comment-answer" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/comment-answer/${commentAnswerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CommentAnswerDetail;
