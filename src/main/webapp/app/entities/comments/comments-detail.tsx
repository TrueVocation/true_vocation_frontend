import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './comments.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CommentsDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const commentsEntity = useAppSelector(state => state.comments.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="commentsDetailsHeading">
          <Translate contentKey="truevocationApp.comments.detail.title">Comments</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{commentsEntity.id}</dd>
          <dt>
            <span id="text">
              <Translate contentKey="truevocationApp.comments.text">Text</Translate>
            </span>
          </dt>
          <dd>{commentsEntity.text}</dd>
          <dt>
            <span id="addedDate">
              <Translate contentKey="truevocationApp.comments.addedDate">Added Date</Translate>
            </span>
          </dt>
          <dd>
            {commentsEntity.addedDate ? <TextFormat value={commentsEntity.addedDate} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <Translate contentKey="truevocationApp.comments.university">University</Translate>
          </dt>
          <dd>{commentsEntity.university ? commentsEntity.university.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.comments.user">User</Translate>
          </dt>
          <dd>{commentsEntity.user ? commentsEntity.user.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.comments.post">Post</Translate>
          </dt>
          <dd>{commentsEntity.post ? commentsEntity.post.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/comments" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/comments/${commentsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CommentsDetail;
