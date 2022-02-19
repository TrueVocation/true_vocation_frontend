import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISubject } from 'app/shared/model/subject.model';
import { getEntities as getSubjects } from 'app/entities/subject/subject.reducer';
import { IProfession } from 'app/shared/model/profession.model';
import { getEntities as getProfessions } from 'app/entities/profession/profession.reducer';
import { IFaculty } from 'app/shared/model/faculty.model';
import { getEntities as getFaculties } from 'app/entities/faculty/faculty.reducer';
import { getEntity, updateEntity, createEntity, reset } from './specialty.reducer';
import { ISpecialty } from 'app/shared/model/specialty.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const SpecialtyUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const subjects = useAppSelector(state => state.subject.entities);
  const professions = useAppSelector(state => state.profession.entities);
  const faculties = useAppSelector(state => state.faculty.entities);
  const specialtyEntity = useAppSelector(state => state.specialty.entity);
  const loading = useAppSelector(state => state.specialty.loading);
  const updating = useAppSelector(state => state.specialty.updating);
  const updateSuccess = useAppSelector(state => state.specialty.updateSuccess);
  const handleClose = () => {
    props.history.push('/specialty' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getSubjects({}));
    dispatch(getProfessions({}));
    dispatch(getFaculties({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...specialtyEntity,
      ...values,
      subjects: mapIdList(values.subjects),
      professions: mapIdList(values.professions),
      faculty: faculties.find(it => it.id.toString() === values.faculty.toString()),
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
          ...specialtyEntity,
          subjects: specialtyEntity?.subjects?.map(e => e.id.toString()),
          professions: specialtyEntity?.professions?.map(e => e.id.toString()),
          faculty: specialtyEntity?.faculty?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.specialty.home.createOrEditLabel" data-cy="SpecialtyCreateUpdateHeading">
            <Translate contentKey="truevocationApp.specialty.home.createOrEditLabel">Create or edit a Specialty</Translate>
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
                  id="specialty-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.specialty.name')}
                id="specialty-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.specialty.description')}
                id="specialty-description"
                name="description"
                data-cy="description"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                label={translate('truevocationApp.specialty.totalGrants')}
                id="specialty-totalGrants"
                name="totalGrants"
                data-cy="totalGrants"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.specialty.minScoreGeneral')}
                id="specialty-minScoreGeneral"
                name="minScoreGeneral"
                data-cy="minScoreGeneral"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.specialty.minScoreQuota')}
                id="specialty-minScoreQuota"
                name="minScoreQuota"
                data-cy="minScoreQuota"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.specialty.picture')}
                id="specialty-picture"
                name="picture"
                data-cy="picture"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.specialty.subject')}
                id="specialty-subject"
                data-cy="subject"
                type="select"
                multiple
                name="subjects"
              >
                <option value="" key="0" />
                {subjects
                  ? subjects.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label={translate('truevocationApp.specialty.profession')}
                id="specialty-profession"
                data-cy="profession"
                type="select"
                multiple
                name="professions"
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
              <ValidatedField
                id="specialty-faculty"
                name="faculty"
                data-cy="faculty"
                label={translate('truevocationApp.specialty.faculty')}
                type="select"
              >
                <option value="" key="0" />
                {faculties
                  ? faculties.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/specialty" replace color="info">
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

export default SpecialtyUpdate;
