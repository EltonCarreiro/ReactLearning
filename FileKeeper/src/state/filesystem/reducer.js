import * as actionTypes from "./actionTypes";

/*
    Folder object structure:
    {
        key: "",
        name: "",
        parent: ""
    } 
    
    File object structure:
    {
        key: "",
        name: "",
        extension: "",
        folderKey: "",
        content: ""
    }
*/

const initialState = {
  folders: {},
  files: {}
};

const handleFileAdd = (state, action) => {
  return Object.assign({}, state, {
    [action.file.key]: action.file
  });
};

const handleFileRename = (state, action) => {
  return Object.assign({}, state, {
    [action.file.key]: Object.assign({}, state[action.file.key], {
      name: action.file.newName,
      extension: action.file.newExtension
    })
  });
};

const handleFileDelete = (state, action) => {
  return Object.keys(state).reduce((prev, curr) => {
    if (curr === action.file.key) {
      return prev;
    }

    prev[curr] = state[curr];
    return prev;
  }, {});
};

const handleFileOperation = (state, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case actionTypes.FILE_ADD:
      return handleFileAdd(state, action);
    case actionTypes.FILE_RENAME:
      return handleFileRename(state, action);
    case actionTypes.FILE_DELETE:
      return handleFileDelete(state, action);
    default:
      return state;
  }
};

const handleFolderAdd = (state, action) => {
  return Object.assign({}, state, {
    [action.folder.key]: action.folder
  });
};

const handleFolderRename = (state, action) => {
  const folder = state[action.folder.key];
  if (folder === undefined) {
    return state;
  }

  const newName =
    action.folder.newName !== undefined ? action.folder.newName : folder.name;
  const newParent =
    action.folder.newParent !== undefined
      ? action.folder.newParent
      : folder.parent;

  return Object.assign({}, state, {
    [action.folder.key]: Object.assign({}, folder, {
      name: newName,
      parent: newParent
    })
  });
};

const handleFolderDelete = (state, action) => {
  return Object.keys(state).reduce((prev, curr) => {
    if (curr === action.folder.key) {
      return prev;
    }
    prev[curr] = state[curr];
    return prev;
  }, {});
};

const handleFolderOperation = (state, action) => {
  switch (action.type) {
    case actionTypes.DIR_ADD:
      return handleFolderAdd(state, action);
    case actionTypes.DIR_RENAME:
      return handleFolderRename(state, action);
    case actionTypes.DIR_DELETE:
      return handleFolderDelete(state, action);
    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  return {
    folders: handleFolderOperation(state.folders, action),
    files: handleFileOperation(state.files, action)
  };
};

export default reducer;
