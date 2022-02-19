import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICourse } from 'app/shared/model/course.model';
import { getEntities as getCourses } from 'app/entities/course/course.reducer';
import { ISpecialty } from 'app/shared/model/specialty.model';
import { getEntities as getSpecialties } from 'app/entities/specialty/specialty.reducer';
import { getEntity, updateEntity, createEntity, reset } from './profession.reducer';
import { IProfession } from 'app/shared/model/profession.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const ProfessionUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const courses = useAppSelector(state => state.course.entities);
  const specialties = useAppSelector(state => state.specialty.entities);
  const professionEntity = useAppSelector(state => state.profession.entity);
  const loading = useAppSelector(state => state.profession.loading);
  const updating = useAppSelector(state => state.profession.updating);
  const updateSuccess = useAppSelector(state => state.profession.updateSuccess);
  const handleClose = () => {
    props.history.push('/profession' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getCourses({}));
    dispatch(getSpecialties({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...professionEntity,
      ...values,
      courses: mapIdList(values.courses),
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
          ...professionEntity,
          courses: professionEntity?.courses?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.profession.home.createOrEditLabel" data-cy="ProfessionCreateUpdateHeading">
            <Translate contentKey="truevocationApp.profession.home.createOrEditLabel">Create or edit a Profession</Translate>
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
                  id="profession-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.profession.name')}
                id="profession-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.profession.description')}
                id="profession-description"
                name="description"
                data-cy="description"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                label={translate('truevocationApp.profession.employability')}
                id="profession-employability"
                name="employability"
                data-cy="employability"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.profession.averageSalary')}
                id="profession-averageSalary"
                name="averageSalary"
                data-cy="averageSalary"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.profession.picture')}
                id="profession-picture"
                name="picture"
                data-cy="picture"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.profession.course')}
                id="profession-course"
                data-cy="course"
                type="select"
                multiple
                name="courses"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/profession" replace color="info">
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

export default ProfessionUpdate;
