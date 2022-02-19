import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './translation.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const TranslationDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const translationEntity = useAppSelector(state => state.translation.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="translationDetailsHeading">
          <Translate contentKey="truevocationApp.translation.detail.title">Translation</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{translationEntity.id}</dd>
          <dt>
            <span id="code">
              <Translate contentKey="truevocationApp.translation.code">Code</Translate>
            </span>
          </dt>
          <dd>{translationEntity.code}</dd>
          <dt>
            <span id="en">
              <Translate contentKey="truevocationApp.translation.en">En</Translate>
            </span>
          </dt>
          <dd>{translationEntity.en}</dd>
          <dt>
            <span id="ru">
              <Translate contentKey="truevocationApp.translation.ru">Ru</Translate>
            </span>
          </dt>
          <dd>{translationEntity.ru}</dd>
          <dt>
            <span id="kk">
              <Translate contentKey="truevocationApp.translation.kk">Kk</Translate>
            </span>
          </dt>
          <dd>{translationEntity.kk}</dd>
        </dl>
        <Button tag={Link} to="/translation" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/translation/${translationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TranslationDetail;
