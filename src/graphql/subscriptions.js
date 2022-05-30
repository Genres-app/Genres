/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBetaQuestionnaire = /* GraphQL */ `
  subscription OnCreateBetaQuestionnaire {
    onCreateBetaQuestionnaire {
      id
      participant_id
      participant_username
      timestamp
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBetaQuestionnaire = /* GraphQL */ `
  subscription OnUpdateBetaQuestionnaire {
    onUpdateBetaQuestionnaire {
      id
      participant_id
      participant_username
      timestamp
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBetaQuestionnaire = /* GraphQL */ `
  subscription OnDeleteBetaQuestionnaire {
    onDeleteBetaQuestionnaire {
      id
      participant_id
      participant_username
      timestamp
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserHistory = /* GraphQL */ `
  subscription OnCreateUserHistory {
    onCreateUserHistory {
      id
      user_id
      action
      start_timestamp
      end_timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserHistory = /* GraphQL */ `
  subscription OnUpdateUserHistory {
    onUpdateUserHistory {
      id
      user_id
      action
      start_timestamp
      end_timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserHistory = /* GraphQL */ `
  subscription OnDeleteUserHistory {
    onDeleteUserHistory {
      id
      user_id
      action
      start_timestamp
      end_timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateVideoMarkers = /* GraphQL */ `
  subscription OnCreateVideoMarkers {
    onCreateVideoMarkers {
      id
      video_id
      timestamp
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateVideoMarkers = /* GraphQL */ `
  subscription OnUpdateVideoMarkers {
    onUpdateVideoMarkers {
      id
      video_id
      timestamp
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteVideoMarkers = /* GraphQL */ `
  subscription OnDeleteVideoMarkers {
    onDeleteVideoMarkers {
      id
      video_id
      timestamp
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      id
      poster_id
      video_title
      time_posted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      id
      poster_id
      video_title
      time_posted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      id
      poster_id
      video_title
      time_posted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments {
    onCreateComments {
      id
      novel_id
      commentor_id
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments {
    onUpdateComments {
      id
      novel_id
      commentor_id
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments {
    onDeleteComments {
      id
      novel_id
      commentor_id
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSaves = /* GraphQL */ `
  subscription OnCreateSaves {
    onCreateSaves {
      id
      novel_id
      saver_id
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSaves = /* GraphQL */ `
  subscription OnUpdateSaves {
    onUpdateSaves {
      id
      novel_id
      saver_id
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSaves = /* GraphQL */ `
  subscription OnDeleteSaves {
    onDeleteSaves {
      id
      novel_id
      saver_id
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes {
    onCreateLikes {
      id
      novel_id
      liker_id
      timestamp
      section
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes {
    onUpdateLikes {
      id
      novel_id
      liker_id
      timestamp
      section
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes {
    onDeleteLikes {
      id
      novel_id
      liker_id
      timestamp
      section
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNovelTags = /* GraphQL */ `
  subscription OnCreateNovelTags {
    onCreateNovelTags {
      id
      novel_id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNovelTags = /* GraphQL */ `
  subscription OnUpdateNovelTags {
    onUpdateNovelTags {
      id
      novel_id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNovelTags = /* GraphQL */ `
  subscription OnDeleteNovelTags {
    onDeleteNovelTags {
      id
      novel_id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAuthors = /* GraphQL */ `
  subscription OnCreateAuthors {
    onCreateAuthors {
      id
      novel_id
      author_id
      author_username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAuthors = /* GraphQL */ `
  subscription OnUpdateAuthors {
    onUpdateAuthors {
      id
      novel_id
      author_id
      author_username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAuthors = /* GraphQL */ `
  subscription OnDeleteAuthors {
    onDeleteAuthors {
      id
      novel_id
      author_id
      author_username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNovelGenres = /* GraphQL */ `
  subscription OnCreateNovelGenres {
    onCreateNovelGenres {
      id
      novel_id
      genre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNovelGenres = /* GraphQL */ `
  subscription OnUpdateNovelGenres {
    onUpdateNovelGenres {
      id
      novel_id
      genre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNovelGenres = /* GraphQL */ `
  subscription OnDeleteNovelGenres {
    onDeleteNovelGenres {
      id
      novel_id
      genre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNovel = /* GraphQL */ `
  subscription OnCreateNovel {
    onCreateNovel {
      id
      title
      is_published
      publication_timestamp
      num_likes
      num_saves
      num_comments
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNovel = /* GraphQL */ `
  subscription OnUpdateNovel {
    onUpdateNovel {
      id
      title
      is_published
      publication_timestamp
      num_likes
      num_saves
      num_comments
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNovel = /* GraphQL */ `
  subscription OnDeleteNovel {
    onDeleteNovel {
      id
      title
      is_published
      publication_timestamp
      num_likes
      num_saves
      num_comments
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
      id
      username
      birthday
      is_beta
      readwrite
      password
      email
      is_admin
      profile_pic
      banner_pic
      bio
      followers
      following
      first_name
      last_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
      id
      username
      birthday
      is_beta
      readwrite
      password
      email
      is_admin
      profile_pic
      banner_pic
      bio
      followers
      following
      first_name
      last_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
      id
      username
      birthday
      is_beta
      readwrite
      password
      email
      is_admin
      profile_pic
      banner_pic
      bio
      followers
      following
      first_name
      last_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
