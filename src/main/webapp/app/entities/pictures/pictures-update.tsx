import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICourse } from 'app/shared/model/course.model';
import { getEntities as getCourses } from 'app/entities/course/course.reducer';
import { IUniversity } from 'app/shared/model/university.model';
import { getEntities as getUniversities } from 'app/entities/university/university.reducer';
import { IPortfolio } from 'app/shared/model/portfolio.model';
import { getEntities as getPortfolios } from 'app/entities/portfolio/portfolio.reducer';
import { getEntity, updateEntity, createEntity, reset } from './pictures.reducer';
import { IPictures } from 'app/shared/model/pictures.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const PicturesUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const courses = useAppSelector(state => state.course.entities);
  const universities = useAppSelector(state => state.university.entities);
  const portfolios = useAppSelector(state => state.portfolio.entities);
  const picturesEntity = useAppSelector(state => state.pictures.entity);
  const loading = useAppSelector(state => state.pictures.loading);
  const updating = useAppSelector(state => state.pictures.updating);
  const updateSuccess = useAppSelector(state => state.pictures.updateSuccess);
  const handleClose = () => {
    props.history.push('/pictures' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getCourses({}));
    dispatch(getUniversities({}));
    dispatch(getPortfolios({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...picturesEntity,
      ...values,
      course: courses.find(it => it.id.toString() === values.course.toString()),
      university: universities.find(it => it.id.toString() === values.university.toString()),
      portfolio: portfolios.find(it => it.id.toString() === values.portfolio.toString()),
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
          ...picturesEntity,
          course: picturesEntity?.course?.id,
          university: picturesEntity?.university?.id,
          portfolio: picturesEntity?.portfolio?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.pictures.home.createOrEditLabel" data-cy="PicturesCreateUpdateHeading">
            <Translate contentKey="truevocationApp.pictures.home.createOrEditLabel">Create or edit a Pictures</Translate>
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
                  id="pictures-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.pictures.picture')}
                id="pictures-picture"
                name="picture"
                data-cy="picture"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                id="pictures-course"
                name="course"
                data-cy="course"
                label={translate('truevocationApp.pictures.course')}
                type="select"
              >
                <option value="" key="0" />
                {courses
                  ? courses.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="pictures-university"
                name="university"
                data-cy="university"
                label={translate('truevocationApp.pictures.university')}
                type="select"
              >
                <option value="" key="0" />
                {universities
                  ? universities.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="pictures-portfolio"
                name="portfolio"
                data-cy="portfolio"
                label={translate('truevocationApp.pictures.portfolio')}
                type="select"
              >
                <option value="" key="0" />
                {portfolios
                  ? portfolios.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/pictures" replace color="info">
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

export default PicturesUpdate;
