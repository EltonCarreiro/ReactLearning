//import { actionTypes, fileSystem as reducer } from "../index";
import * as test from "../index";

const reducer = test.fileSystem;
const actionTypes = test.actionTypes;

const initialState = {
  folders: {},
  files: {}
};

describe("File operations", () => {
  it("should add file into the root directory succesfully", () => {
    const file = {
      key: "1234",
      name: "TestFile",
      extension: "js",
      folderKey: "null",
      content: "content test"
    };
    const expectedState = Object.assign({}, initialState, {
      files: {
        [file.key]: file
      }
    });

    expect(
      reducer(initialState, {
        type: actionTypes.FILE_ADD,
        file: file
      })
    ).toEqual(expectedState);
  });

  it("should rename file succesfully", () => {
    const oldName = "oldName";
    const oldExtension = "cs";
    const newName = "newName";
    const newExtension = "js";

    const file = {
      key: "1234",
      name: oldName,
      extension: oldExtension,
      folderKey: "null",
      content: "content test"
    };

    const initialTestState = Object.assign({}, initialState, {
      files: {
        [file.key]: file
      }
    });

    const newFile = Object.assign({}, file, {
      name: newName,
      extension: newExtension
    });

    const expectedState = Object.assign({}, initialState, {
      files: {
        [file.key]: newFile
      }
    });

    expect(
      reducer(initialTestState, {
        type: actionTypes.FILE_RENAME,
        file: {
          key: file.key,
          newName: newName,
          newExtension: newExtension
        }
      })
    ).toEqual(expectedState);
  });

  it("should delete file succesfully", () => {
    const firstFile = {
      key: "1234",
      name: "first test file",
      extension: "js",
      folderKey: "null",
      content: "first content test"
    };

    const secondFile = {
      key: "4321",
      name: "second test file",
      extension: "cs",
      folderKey: "null",
      content: "second content test"
    };

    const thirdFile = {
      key: "12121",
      name: "third test file",
      extension: "pdf",
      folderKey: "null",
      content: "third content test"
    };

    const initialTestState = Object.assign({}, initialState, {
      files: {
        [firstFile.key]: firstFile,
        [secondFile.key]: secondFile,
        [thirdFile.key]: thirdFile
      }
    });

    const expectedState = Object.assign({}, initialTestState, {
      files: {
        [secondFile.key]: secondFile,
        [thirdFile.key]: thirdFile
      }
    });

    expect(
      reducer(initialTestState, {
        type: actionTypes.FILE_DELETE,
        file: { key: firstFile.key }
      })
    ).toEqual(expectedState);
  });
});

describe("Folder operations", () => {
  it("should add folder succesfully", () => {
    const testInitialState = Object.assign({}, initialState);
    const folder = {
      key: "1234",
      name: "folder test",
      parent: null
    };

    const expectedState = Object.assign({}, testInitialState, {
      folders: {
        [folder.key]: folder
      }
    });

    expect(
      reducer(testInitialState, {
        type: actionTypes.DIR_ADD,
        folder
      })
    ).toEqual(expectedState);
  });

  it("should rename folder succesfully", () => {
    const folder = {
      key: "1234",
      name: "folder test",
      parent: null
    };

    const newName = "new name";
    const newParent = "newParent";

    const testInitialState = Object.assign({}, initialState, {
      folders: {
        [folder.key]: folder
      }
    });

    const expectedState = Object.assign({}, testInitialState, {
      folders: {
        [folder.key]: Object.assign({}, testInitialState.folders[folder.key], {
          name: newName,
          parent: newParent
        })
      }
    });

    expect(
      reducer(testInitialState, {
        type: actionTypes.DIR_RENAME,
        folder: {
          key: folder.key,
          newName: newName,
          newParent: newParent
        }
      })
    ).toEqual(expectedState);
  });

  it("should delete folder succesfully", () => {
    const firstFolder = {
      key: "1234",
      name: "first folder",
      parent: null
    };

    const secondFolder = {
      key: "4321",
      name: "second folder",
      parent: null
    };

    const testInitialState = Object.assign({}, initialState, {
      folders: {
        [firstFolder.key]: firstFolder,
        [secondFolder.key]: secondFolder
      }
    });

    const expectedState = Object.assign({}, testInitialState, {
      folders: {
        [secondFolder.key]: secondFolder
      }
    });

    expect(
      reducer(testInitialState, {
        type: actionTypes.DIR_DELETE,
        folder: {
          key: firstFolder.key
        }
      })
    ).toEqual(expectedState);
  });
});
