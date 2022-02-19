import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './likes.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const LikesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const likesEntity = useAppSelector(state => state.likes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="likesDetailsHeading">
          <Translate contentKey="truevocationApp.likes.detail.title">Likes</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{likesEntity.id}</dd>
          <dt>
            <Translate contentKey="truevocationApp.likes.comment">Comment</Translate>
          </dt>
          <dd>{likesEntity.comment ? likesEntity.comment.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.likes.user">User</Translate>
          </dt>
          <dd>{likesEntity.user ? likesEntity.user.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.likes.post">Post</Translate>
          </dt>
          <dd>{likesEntity.post ? likesEntity.post.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/likes" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/likes/${likesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default LikesDetail;
