import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './favorite.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const FavoriteDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const favoriteEntity = useAppSelector(state => state.favorite.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="favoriteDetailsHeading">
          <Translate contentKey="truevocationApp.favorite.detail.title">Favorite</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{favoriteEntity.id}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="truevocationApp.favorite.type">Type</Translate>
            </span>
          </dt>
          <dd>{favoriteEntity.type}</dd>
          <dt>
            <Translate contentKey="truevocationApp.favorite.university">University</Translate>
          </dt>
          <dd>{favoriteEntity.university ? favoriteEntity.university.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.favorite.user">User</Translate>
          </dt>
          <dd>{favoriteEntity.user ? favoriteEntity.user.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.favorite.post">Post</Translate>
          </dt>
          <dd>{favoriteEntity.post ? favoriteEntity.post.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/favorite" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/favorite/${favoriteEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FavoriteDetail;
